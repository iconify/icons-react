import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwk0k-bfu.css';
import '../../css/h/hzn7y5udb.css';
import '../../css/d/dvhdx5bfq.css';
import '../../css/s/sx667fd1s.css';
import '../../css/e/ea0xpgcru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwk0k-bfu wm-shadow"/><path class="hzn7y5udb wm-k"/><path class="dvhdx5bfq wm-a"/><path class="sx667fd1s wm-deco"/><path class="ea0xpgcru wm-shine"/>`,
		"fallback": "withicons-pastel:phone",
	});
}

export default Component;
