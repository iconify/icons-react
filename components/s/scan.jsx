import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xps_907vl.css';
import '../../css/v/vz-wlg24n.css';
import '../../css/r/r9b3uwi_y.css';
import '../../css/l/lk58n-fdk.css';
import '../../css/z/zza6s4ggi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xps_907vl"/><path class="vz-wlg24n wm-k"/><path class="r9b3uwi_y wm-k"/><path class="lk58n-fdk wm-a"/><path class="wm-a zza6s4ggi"/>`,
		"fallback": "withicons-pastel:scan",
	});
}

export default Component;
