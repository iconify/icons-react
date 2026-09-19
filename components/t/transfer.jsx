import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha5ktc05w.css';
import '../../css/n/nw2_zeb4l.css';
import '../../css/z/z70d-8byq.css';
import '../../css/t/tlgg1sbbc.css';
import '../../css/e/ec-ycqrem.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGa05DEUAI"><g class="ft5dv1b6b"><path class="ha5ktc05w"/><path class="nw2_zeb4l"/><path class="z70d-8byq"/><circle class="tlgg1sbbc"/><circle class="ec-ycqrem"/></g></mask></defs><path mask="url(#SVGa05DEUAI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:transfer",
	});
}

export default Component;
