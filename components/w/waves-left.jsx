import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/ezm4tij9w.css';
import '../../css/d/dak6u4bwz.css';
import '../../css/y/y-d1b7lad.css';
import '../../css/y/yjnw3jb-n.css';
import '../../css/y/ygubgp9tm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="ezm4tij9w"/><path class="dak6u4bwz"/><path class="y-d1b7lad"/><path class="yjnw3jb-n"/><path class="ygubgp9tm"/></g>`,
		"fallback": "icon-park:waves-left",
	});
}

export default Component;
