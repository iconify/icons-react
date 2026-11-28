import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu44018sa.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bdjbc6bam.css';
import '../../css/a/aamzuxgbx.css';
import '../../css/i/if0ufkp_i.css';
import '../../css/z/zq7w4tasu.css';
import '../../css/k/kt2-hnb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu44018sa secondary"/><g class="dt0cm9dhy primary"><path class="bdjbc6bam"/><path class="aamzuxgbx"/><path class="if0ufkp_i"/><path class="zq7w4tasu"/><path class="kt2-hnb4k"/></g>`,
		"fallback": "iconaut:paw-duo",
	});
}

export default Component;
