import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvgdpzb2e.css';
import '../../css/z/zwk9pwjve.css';
import '../../css/t/tole7g8rg.css';
import '../../css/g/gtdnn0bvx.css';
import '../../css/n/nwr7g7mfc.css';
import '../../css/u/uwa6vopby.css';
import '../../css/h/hswnvybat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvgdpzb2e"/><path class="zwk9pwjve"/><path class="tole7g8rg"/><path class="gtdnn0bvx"/><path class="nwr7g7mfc"/><path class="uwa6vopby"/><path class="hswnvybat"/>`,
		"fallback": "streamline-emojis:oncoming-fist-2",
	});
}

export default Component;
