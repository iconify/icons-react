import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_snteb-s.css';
import '../../css/b/b05e0yo7m.css';
import '../../css/t/tnas7_1ty.css';

const viewBox = {"width":32,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_snteb-s"/><path clip-rule="evenodd" class="b05e0yo7m"/><path clip-rule="evenodd" class="tnas7_1ty"/>`,
		"fallback": "oui:vis-builder",
	});
}

export default Component;
