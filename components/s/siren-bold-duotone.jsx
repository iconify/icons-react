import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g7y6boy.css';
import '../../css/q/qndnb7b2a.css';
import '../../css/k/kfbw_mbiu.css';
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
		"content": `<path class="l7g7y6boy"/><path class="qndnb7b2a"/><path class="kfbw_mbiu"/><path class="t_xoi_88f"/><path class="rfylp4bqz"/><path class="vwazgn8zx"/>`,
		"fallback": "solar:siren-bold-duotone",
	});
}

export default Component;
