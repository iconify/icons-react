import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xihc5gn2q.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/xm3f1qbyz.css';
import '../../css/o/o6j0-0h9i.css';
import '../../css/a/aishiubnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xihc5gn2q"/><g class="n1mjunbsu"><circle class="xm3f1qbyz"/><circle class="o6j0-0h9i"/><circle class="aishiubnq"/></g>`,
		"fallback": "flat-color-icons:sms",
	});
}

export default Component;
