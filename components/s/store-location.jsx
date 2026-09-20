import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afo9gwbys.css';
import '../../css/j/jl6es7t-m.css';
import '../../css/c/c9zpqgb5p.css';
import '../../css/v/v_p95zaqq.css';
import '../../css/k/kubia1bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afo9gwbys"/><path class="jl6es7t-m"/><path class="c9zpqgb5p"/><path class="v_p95zaqq"/><path class="kubia1bdp"/></g>`,
		"fallback": "streamline-cyber-color:store-location",
	});
}

export default Component;
