import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zvjbs8b4c.css';
import '../../css/s/s3n559byn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zvjbs8b4c"/><path class="s3n559byn"/></g>`,
		"fallback": "doodle-icons:pen",
	});
}

export default Component;
