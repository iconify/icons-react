import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfnfvbmpm.css';
import '../../css/t/t_xoi_88f.css';
import '../../css/r/rfylp4bqz.css';
import '../../css/v/vwazgn8zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jfnfvbmpm"/><path class="t_xoi_88f"/><path class="rfylp4bqz"/><path class="vwazgn8zx"/>`,
		"fallback": "solar:siren-bold",
	});
}

export default Component;
