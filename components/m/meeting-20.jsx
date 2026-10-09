import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-p7dsdol.css';
import '../../css/h/hiujlmj2j.css';
import '../../css/z/zxv1icbdw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-p7dsdol"/><path class="hiujlmj2j"/><path class="zxv1icbdw"/>`,
		"fallback": "energy-icons:meeting-20",
	});
}

export default Component;
