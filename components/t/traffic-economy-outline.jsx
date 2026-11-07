import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exsf8gejx.css';
import '../../css/x/x8863dbnx.css';
import '../../css/r/rgo7s3bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exsf8gejx"/><path class="x8863dbnx"/><path class="rgo7s3bar"/>`,
		"fallback": "solar:traffic-economy-outline",
	});
}

export default Component;
