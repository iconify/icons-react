import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za8njebkw.css';
import '../../css/z/zstbz94ff.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="za8njebkw"/><circle class="zstbz94ff"/>`,
		"fallback": "garden:record-fill-12",
	});
}

export default Component;
