import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe32f93df.css';
import '../../css/o/o-ejz-b0a.css';
import '../../css/q/qpcow5bvc.css';
import '../../css/z/z6blvu--y.css';
import '../../css/x/xvfra1b9t.css';
import '../../css/b/b0zeadx-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="qe32f93df"><path class="o-ejz-b0a"/><path class="qpcow5bvc"/><path class="z6blvu--y"/><path class="xvfra1b9t"/></g><path class="b0zeadx-c"/>`,
		"fallback": "solar:playlist-minimalistic-2-bold-duotone",
	});
}

export default Component;
