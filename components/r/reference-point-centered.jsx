import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wal1i4bpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wal1i4bpe"/>`,
		"fallback": "ix:reference-point-centered",
	});
}

export default Component;
