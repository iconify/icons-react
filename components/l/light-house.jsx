import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sechjcbnq.css';
import '../../css/h/h7v1_8oxy.css';
import '../../css/v/vky0p5_8d.css';
import '../../css/s/s215oqsdc.css';
import '../../css/k/kns8fnb5y.css';
import '../../css/o/ogdxlgblf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG95D6pd4v"><g class="ufeehvblu"><path class="sechjcbnq"/><path class="h7v1_8oxy"/><path class="vky0p5_8d"/><path class="s215oqsdc"/><path class="kns8fnb5y"/><path class="ogdxlgblf"/></g></mask></defs><path mask="url(#SVG95D6pd4v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:light-house",
	});
}

export default Component;
