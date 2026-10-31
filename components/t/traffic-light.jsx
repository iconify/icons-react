import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lzxgorb0c.css';
import '../../css/d/dkqzogx4t.css';
import '../../css/d/d05ccnb9v.css';
import '../../css/u/urmh9jyiu.css';
import '../../css/o/ooj4n9bxb.css';
import '../../css/f/f457nq0hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lzxgorb0c wm-shadow"/><path class="dkqzogx4t"/><path class="d05ccnb9v"/><path class="urmh9jyiu"/><path class="ooj4n9bxb"/><path class="f457nq0hz"/></g>`,
		"fallback": "withicons-retro:traffic-light",
	});
}

export default Component;
