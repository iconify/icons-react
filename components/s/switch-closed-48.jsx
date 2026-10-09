import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n22xqs0ko.css';
import '../../css/o/obkwv4bpm.css';
import '../../css/f/ffq6x-bwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n22xqs0ko"/><path class="obkwv4bpm"/><path class="ffq6x-bwo"/>`,
		"fallback": "energy-icons:switch-closed-48",
	});
}

export default Component;
