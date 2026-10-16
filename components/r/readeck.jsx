import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7mm01bas.css';
import '../../css/u/ug7ieebdm.css';
import '../../css/i/i-x3x5b1b.css';
import '../../css/u/uuivlo-_u.css';
import '../../css/d/do1em7n1y.css';
import '../../css/e/ebs3qhbbm.css';

const viewBox = {"width":240,"height":240};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7mm01bas"/><path class="ug7ieebdm"/><path class="i-x3x5b1b"/><path class="uuivlo-_u"/><path class="do1em7n1y"/><path class="ebs3qhbbm"/>`,
		"fallback": "thesvg-color:readeck",
	});
}

export default Component;
