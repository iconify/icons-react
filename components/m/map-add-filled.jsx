import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx0an_mmx.css';
import '../../css/s/spq8jsdzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx0an_mmx"/><path class="spq8jsdzh"/>`,
		"fallback": "tdesign:map-add-filled",
	});
}

export default Component;
