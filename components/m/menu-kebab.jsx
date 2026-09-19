import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/igc2mbcca.css';
import '../../css/l/l5goj9tdn.css';
import '../../css/a/abpbqzb9d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="igc2mbcca"/><circle class="l5goj9tdn"/><circle class="abpbqzb9d"/></g>`,
		"fallback": "charm:menu-kebab",
	});
}

export default Component;
