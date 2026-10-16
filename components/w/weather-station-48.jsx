import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffgo8jbww.css';
import '../../css/y/yzrxcvbma.css';
import '../../css/o/o-o8tgb3f.css';
import '../../css/i/i-i_4rewx.css';
import '../../css/a/azjk1obih.css';
import '../../css/n/nh3pp-bwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffgo8jbww"/><path class="yzrxcvbma"/><path class="o-o8tgb3f"/><path class="i-i_4rewx"/><path class="azjk1obih"/><path class="nh3pp-bwc"/>`,
		"fallback": "energy-icons:weather-station-48",
	});
}

export default Component;
