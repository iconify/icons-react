import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlz2ze66a.css';
import '../../css/n/n4hz257hz.css';
import '../../css/z/zktgoabmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vlz2ze66a"/><path clip-rule="evenodd" class="n4hz257hz"/><path class="zktgoabmd"/>`,
		"fallback": "token:mft",
	});
}

export default Component;
