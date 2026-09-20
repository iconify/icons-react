import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kn0lpk9fb.css';
import '../../css/q/qclqxdbjb.css';
import '../../css/k/kqadjqbqh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kn0lpk9fb"/><path class="qclqxdbjb"/><path class="kqadjqbqh"/></g>`,
		"fallback": "streamline-color:medical-bag-flat",
	});
}

export default Component;
