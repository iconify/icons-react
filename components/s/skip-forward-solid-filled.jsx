import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-zstca3u.css';
import '../../css/q/qivzlzbeu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-zstca3u"/><path class="qivzlzbeu"/>`,
		"fallback": "carbon:skip-forward-solid-filled",
	});
}

export default Component;
