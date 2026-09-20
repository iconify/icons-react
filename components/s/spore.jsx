import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrpqwnbxi.css';
import '../../css/p/prp34yb0x.css';
import '../../css/x/xvfbmtxag.css';
import '../../css/n/ncu31cbcd.css';
import '../../css/e/e82q6tbic.css';
import '../../css/o/o2fh95box.css';
import '../../css/y/yz31hdb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrpqwnbxi"/><path class="prp34yb0x"/><path class="xvfbmtxag"/><path class="ncu31cbcd"/><path class="e82q6tbic"/><path class="o2fh95box"/><path class="yz31hdb4j"/>`,
		"fallback": "token:spore",
	});
}

export default Component;
