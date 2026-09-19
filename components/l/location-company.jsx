import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu2_-nbje.css';
import '../../css/e/e6t7vc15w.css';
import '../../css/s/sfus55blb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu2_-nbje"/><path class="e6t7vc15w"/><path class="sfus55blb"/>`,
		"fallback": "carbon:location-company",
	});
}

export default Component;
