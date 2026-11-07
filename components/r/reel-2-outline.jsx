import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcs6tehmj.css';
import '../../css/m/ml1bsrb5l.css';
import '../../css/f/fsv_d9evq.css';
import '../../css/d/dkkib-ewx.css';
import '../../css/v/ve8higxbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kcs6tehmj"/><path class="ml1bsrb5l"/><path class="fsv_d9evq"/><path class="dkkib-ewx"/><path class="ve8higxbl"/>`,
		"fallback": "solar:reel-2-outline",
	});
}

export default Component;
