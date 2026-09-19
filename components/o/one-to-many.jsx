import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jy1imkqad.css';
import '../../css/v/vy68oqfbo.css';
import '../../css/k/ku4pobser.css';
import '../../css/y/ybwsvbboz.css';
import '../../css/l/l40qc0btw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="jy1imkqad"/><path class="vy68oqfbo"/><path class="ku4pobser"/><path class="ybwsvbboz"/><path class="l40qc0btw"/></g>`,
		"fallback": "icon-park:one-to-many",
	});
}

export default Component;
