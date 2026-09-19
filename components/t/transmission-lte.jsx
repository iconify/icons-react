import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvmivbb5a.css';
import '../../css/i/ih5xe3bid.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvmivbb5a"/><path class="ih5xe3bid"/>`,
		"fallback": "carbon:transmission-lte",
	});
}

export default Component;
