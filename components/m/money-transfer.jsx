import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1712w5xs.css';
import '../../css/c/c_beihbyf.css';
import '../../css/u/u-n1j5bav.css';
import '../../css/v/vxglmsbxe.css';
import '../../css/n/ng3kcebon.css';
import '../../css/f/fk7u5-mbu.css';
import '../../css/r/rd82ifb1f.css';
import '../../css/t/tsbi9cmqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1712w5xs"/><path class="c_beihbyf"/><g class="u-n1j5bav"><path class="vxglmsbxe"/><path class="ng3kcebon"/><circle class="fk7u5-mbu"/><circle class="rd82ifb1f"/></g><path class="tsbi9cmqg"/>`,
		"fallback": "flat-color-icons:money-transfer",
	});
}

export default Component;
