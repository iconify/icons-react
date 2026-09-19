import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h5f4lf-br.css';
import '../../css/t/tu9a_ubaw.css';
import '../../css/a/aiih0sb_n.css';
import '../../css/u/uurlglbre.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpDjUIbjP"><g class="wwvp95byt"><path class="h5f4lf-br"/><ellipse class="tu9a_ubaw"/><ellipse class="aiih0sb_n"/><path class="uurlglbre"/></g></mask></defs><path mask="url(#SVGpDjUIbjP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tire-swing",
	});
}

export default Component;
