import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qloeeh4pd.css';
import '../../css/z/zqc9e19xs.css';
import '../../css/b/bqr110b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qloeeh4pd"><path class="zqc9e19xs"/><path class="bqr110b0x"/></g>`,
		"fallback": "streamline-sharp:one-handed-holding-tablet-handheld",
	});
}

export default Component;
