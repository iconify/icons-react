import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pec648bzl.css';
import '../../css/i/i4lld7tyb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pec648bzl"/><path class="i4lld7tyb"/>`,
		"fallback": "energy-icons:rupee-20",
	});
}

export default Component;
