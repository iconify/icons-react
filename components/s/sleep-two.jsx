import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/tu4qdd9vm.css';
import '../../css/u/uzdx58bvc.css';
import '../../css/b/b_ba31ccq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRifAjcps"><g class="rohhhzb0l"><path class="tu4qdd9vm"/><path class="uzdx58bvc"/><circle class="b_ba31ccq"/></g></mask></defs><path mask="url(#SVGRifAjcps)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sleep-two",
	});
}

export default Component;
