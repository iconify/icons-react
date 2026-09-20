import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdnqjebwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle r="0" class="vdnqjebwm"><animate id="SVGPW9ARccz" fill="freeze" attributeName="r" begin="0;SVGaeu34cWL.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="0;SVGaeu34cWL.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle r="0" class="vdnqjebwm"><animate id="SVGODvPjeTJ" fill="freeze" attributeName="r" begin="SVGPW9ARccz.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="SVGPW9ARccz.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle r="0" class="vdnqjebwm"><animate id="SVGaeu34cWL" fill="freeze" attributeName="r" begin="SVGPW9ARccz.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="SVGPW9ARccz.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle>`,
		"fallback": "svg-spinners:pulse-multiple",
	});
}

export default Component;
