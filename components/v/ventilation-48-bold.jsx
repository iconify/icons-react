import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfpjugbvy.css';
import '../../css/i/ie8kakb8r.css';
import '../../css/o/oer3qjgyj.css';
import '../../css/t/t84yf1bki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfpjugbvy"/><path class="ie8kakb8r"/><path class="oer3qjgyj"/><path class="t84yf1bki"/>`,
		"fallback": "energy-icons:ventilation-48-bold",
	});
}

export default Component;
