import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqmbunszu.css';
import '../../css/t/tyh7i7bjl.css';
import '../../css/l/l059qz18g.css';
import '../../css/c/ch1179b3s.css';
import '../../css/n/nfxloigqf.css';
import '../../css/w/wq2oayscy.css';
import '../../css/q/qcibju32j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqmbunszu"/><path class="tyh7i7bjl"/><path class="l059qz18g"/><path class="ch1179b3s"/><path class="nfxloigqf"/><path class="wq2oayscy"/><path class="qcibju32j"/>`,
		"fallback": "iconito:pork",
	});
}

export default Component;
