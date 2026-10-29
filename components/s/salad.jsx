import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq-2nhzsk.css';
import '../../css/s/swd9vnbum.css';
import '../../css/x/xggvebwvx.css';
import '../../css/z/zukopy3pf.css';
import '../../css/u/ua5gpvb3o.css';
import '../../css/a/a3i5tybpp.css';
import '../../css/s/s3m2p4bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a wq-2nhzsk"/><path class="swd9vnbum wm-a"/><path class="wm-a xggvebwvx"/><path class="wm-k zukopy3pf"/><path class="ua5gpvb3o wm-k"/><path class="a3i5tybpp wm-k"/><path class="s3m2p4bhi wm-k"/>`,
		"fallback": "withicons-bauhaus:salad",
	});
}

export default Component;
