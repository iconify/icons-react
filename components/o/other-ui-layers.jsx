import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1e7tlb4k.css';
import '../../css/y/yse77p9vi.css';
import '../../css/v/v-ftc0wtk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1e7tlb4k"/><path class="yse77p9vi"/><path class="v-ftc0wtk"/>`,
		"fallback": "streamline-block:other-ui-layers",
	});
}

export default Component;
