import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkwnyu5zy.css';
import '../../css/o/onqnis1mn.css';
import '../../css/h/h6hpqtbrt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkwnyu5zy"/><path class="onqnis1mn"/><path class="h6hpqtbrt"/>`,
		"fallback": "carbon:mobile-view-orientation",
	});
}

export default Component;
