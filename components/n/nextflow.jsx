import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed-nndx6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed-nndx6d"/>`,
		"fallback": "catppuccin:nextflow",
	});
}

export default Component;
