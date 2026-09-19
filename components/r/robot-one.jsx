import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q74m0wk6v.css';
import '../../css/n/nvarbzb-o.css';
import '../../css/e/eqne90b8g.css';
import '../../css/j/j27n0_s5k.css';
import '../../css/g/gu4jepboy.css';
import '../../css/y/y6_ym-bae.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSDSXGb1A"><g class="ft5dv1b6b"><rect class="q74m0wk6v"/><circle class="nvarbzb-o"/><circle class="eqne90b8g"/><path class="j27n0_s5k"/><path class="gu4jepboy"/><circle class="y6_ym-bae"/></g></mask></defs><path mask="url(#SVGSDSXGb1A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:robot-one",
	});
}

export default Component;
