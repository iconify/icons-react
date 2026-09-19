import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qt79kinow.css';
import '../../css/h/h4mp09m6a.css';
import '../../css/l/lf08_gphq.css';
import '../../css/o/o8spoxb3j.css';
import '../../css/a/a9i3e_buh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrTONdecj"><g class="rohhhzb0l"><path class="qt79kinow"/><path class="h4mp09m6a"/><path class="lf08_gphq"/><circle class="o8spoxb3j"/><path class="a9i3e_buh"/></g></mask></defs><path mask="url(#SVGrTONdecj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vacuum-cleaner",
	});
}

export default Component;
