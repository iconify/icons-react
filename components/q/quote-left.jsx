import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcf9nvb2k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcf9nvb2k"/>`,
		"fallback": "vaadin:quote-left",
	});
}

export default Component;
