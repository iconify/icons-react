import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqt06ac5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqt06ac5d"/>`,
		"fallback": "streamline-plump:microscope-observation-sciene-solid",
	});
}

export default Component;
