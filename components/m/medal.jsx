import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sn2uwpj5a.css';
import '../../css/s/s_il_-wpj.css';
import '../../css/s/s3pbttbpo.css';
import '../../css/g/gtlmrfbva.css';
import '../../css/r/riobllbcg.css';
import '../../css/j/jx6kj-efx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sn2uwpj5a wm-shadow"/><path class="s_il_-wpj"/><path class="s3pbttbpo"/><path class="gtlmrfbva"/><path class="riobllbcg"/><path class="jx6kj-efx"/></g>`,
		"fallback": "withicons-retro:medal",
	});
}

export default Component;
