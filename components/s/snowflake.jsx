import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp287xku.css';
import '../../css/t/t2z-5sb_c.css';
import '../../css/w/wx5g56q5c.css';
import '../../css/e/epxunkbcs.css';
import '../../css/n/n2dwat_5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp287xku"/><path class="t2z-5sb_c"/><path class="wx5g56q5c"/><path class="epxunkbcs"/><path class="n2dwat_5w"/>`,
		"fallback": "streamline-emojis:snowflake",
	});
}

export default Component;
