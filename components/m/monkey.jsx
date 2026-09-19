import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi_q2g81h.css';
import '../../css/e/eaqww_f4q.css';
import '../../css/r/rbv7gsb9n.css';
import '../../css/a/afvgdmb3i.css';
import '../../css/s/shijz7c6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC9ImjbTg"><g class="ft5dv1b6b"><path class="bi_q2g81h"/><ellipse class="eaqww_f4q"/><path class="rbv7gsb9n"/><circle class="afvgdmb3i"/><circle class="shijz7c6h"/></g></mask></defs><path mask="url(#SVGC9ImjbTg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:monkey",
	});
}

export default Component;
