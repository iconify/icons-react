import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm72pybvi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm72pybvi"/>`,
		"fallback": "f7:textformat-123",
	});
}

export default Component;
