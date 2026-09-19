import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/s/s13ifac-r.css';
import '../../css/i/iitl1vnln.css';
import '../../css/l/l46q-nnoo.css';
import '../../css/e/ene781bhp.css';
import '../../css/o/o8wr9-bhe.css';
import '../../css/g/gkmojcbcl.css';
import '../../css/q/qo69blmhi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="s13ifac-r"/><path class="iitl1vnln"/><path class="l46q-nnoo"/><path class="ene781bhp"/><path class="o8wr9-bhe"/><path class="gkmojcbcl"/><path class="qo69blmhi"/></g>`,
		"fallback": "icon-park:signal-tower-one",
	});
}

export default Component;
